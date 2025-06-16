import { images } from '../../assets';
import { Organization } from 'incident-code-core';
import React, { memo, useEffect, useState } from 'react';
import { FlatList, StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';
import styled from '../../utils/styled';
import { useIntl } from 'react-intl';
import GradientButton from '../GradientButton';
import IconButton from '../IconButton';
import messages from './messages';
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useAction } from '../../utils/hooks';
import { setSiteKeyStatusRequest, getAllGeofenceRequest } from '../../utils/location/actions';

interface Props {
  isVisible: boolean;
  userData: any;
  onShow?(): void;
  onHide?(): void;
  hideModal(): void;
  isFromNotification: boolean;
  notification_id: any
}

/**
 * SiteKeyModal component.
 * Renders a modal for selecting and checking in/out of locations.
 *
 * @param isVisible - Flag indicating whether the modal is visible.
 * @param userData - User data.
 * @param onShow - Callback function when the modal is about to show.
 * @param onHide - Callback function when the modal is about to hide.
 * @param hideModal - Callback function to hide the modal.
 * @param isFromNotification - Flag indicating whether the modal is triggered from a notification.
 * @param notification_id - ID of the notification.
 */
const SiteKeyModal: React.FC<Props> = ({
  isVisible,
  userData,
  onShow,
  onHide,
  hideModal,
  isFromNotification,
  notification_id
}) => {
  const { formatMessage } = useIntl();
  const setSiteKeyRequest = useAction(setSiteKeyStatusRequest);
  const getGeofecens = useAction(getAllGeofenceRequest);
  const isFetchingLocations = useSelector((state) => { return state.getAllGeofence.isLoading });
  const getAllLocations = useSelector((state) => { return state.getAllGeofence.payload });
  const [onSiteLocation, setOnSiteLocation] = useState(getAllLocations != undefined ? getAllLocations.locations.filter((item: any) => item.onSite == true) : []);
  let selectedLocaton = { location_id: isFromNotification ? notification_id : 0 }
  const crossedLocation =
    isFromNotification ? getAllLocations != undefined ? getAllLocations.locations.filter((item: any) => item.location_id == notification_id) : [] : []

  const updateOnSiteStatus = (locations: any, selectedId: string, isOnSite: boolean) => {
    const selectedIdNum = Number(selectedId); // Convert string ID to number
    return locations.locations.map((loc:any) => ({
      ...loc,
      onSite: loc.location_id === selectedIdNum ? isOnSite : false, // Correct comparison
    }));
  };

  useEffect(() => {
    if (getAllLocations != undefined) {
      setOnSiteLocation(getAllLocations.locations.filter((item: any) => item.onSite == true))
    }
  },[getAllLocations])

  /**
 * Check in or out of a location.
 *
 * @param isOnSite - Flag indicating whether the user is on site or off site.
 */
  const checkIn = (isOnSite: boolean) => {
    if (selectedLocaton.location_id === 0) {
      // Handle error when no location is selected
    } else {
      const updatedLocations = updateOnSiteStatus(getAllLocations, selectedLocaton.location_id, isOnSite);
      setOnSiteLocation(updatedLocations.filter((item: any) => item.onSite == true))
      hideModal()
      // console.log("selected location Id ==>",selectedLocaton.location_id)
      const payload = {
        userId: userData.id,
        locationId: selectedLocaton.location_id,
        body: { "onSite": isOnSite }
      }
      // console.log("payload ==>",)
      setSiteKeyRequest(payload)
    }
  }

  /**
   * Fetch locations.
   * Retrieves the list of available locations.
   */
  const fetchLocations = () => {
    getGeofecens(userData.id)
  }

  /**
   * Render the dropdown component for selecting a location.
   *
   * @returns The rendered dropdown component.
   */
  const renderDropdown = () => {
    if (getAllLocations == undefined) {
      if (isFetchingLocations) {
        return <View style={styles.tapToFetchLocationStyle}>
          <ActivityIndicator
            size={'small'}
            color={'grey'}>
          </ActivityIndicator>
        </View>
      }
      else {
        return (
          <View>
            <NoNetworkTxtStyle>{formatMessage(messages.noNetworkMessage)}</NoNetworkTxtStyle>
            <FetchLocationButton
              onPress={() => fetchLocations()}
              text={formatMessage(messages.tapToFetchLocation)}>
            </FetchLocationButton>
          </View>
        )
      }
    }
    else {
      return <SelectDropdown
        data={getAllLocations != undefined ? getAllLocations.locations : []}
        onSelect={(selectedItem, index) => {
          selectedLocaton.location_id = selectedItem.location_id
        }}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View>
              <View style={styles.dropdownButtonStyle}>
                <DropDownButtonTxtStyle>
                  {(selectedItem && selectedItem.name) || formatMessage(messages.selectLocation)}
                </DropDownButtonTxtStyle>
                <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} style={styles.dropdownButtonArrowStyle} />
              </View>
            </View>
          );
        }}
        renderItem={(item) => {
          return (
            <View style={{ ...styles.dropdownItemStyle }}>
              <Text style={styles.dropdownItemTxtStyle}>{item.name}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
      />
    }
  }

  /**
   * Render the description component.
   *
   * @returns The rendered description component.
   */
  const renderDescription = () => {
    if (getAllLocations != undefined) {
      return <Description>{formatMessage(messages.description)}</Description>
    }
  }

  /**
   * Render the check-in button.
   *
   * @returns The rendered check-in button.
   */
  const renderCheckIn = () => {
    if (getAllLocations != undefined) {
      return <CheckInButton
        onPress={() => checkIn(true)}
        text={formatMessage(messages.checkInOnSite)}
      />
    }
  }

  /**
   * Render the check-out button.
   *
   * @returns The rendered check-out button.
   */
  const renderCheckOut = () => {
    if (getAllLocations != undefined) {
      return <CheckOutButton
        onPress={() => checkIn(false)}
        text={formatMessage(messages.checkOutOffSite)}
      />
    }
  }

  return (
    <Modal
      useNativeDriver
      animationIn="zoomIn"
      animationOut="zoomOut"
      isVisible={isVisible}
      onBackButtonPress={hideModal}
      onBackdropPress={hideModal}
      onModalWillShow={onShow}
      onModalWillHide={onHide}
    >
      <Container>
        <Title>{formatMessage(messages.siteKey)}</Title>
        <CloseButton onPress={hideModal} source={images.icClose()} />
        {!isFromNotification && <Status>{formatMessage(messages.status)}:
          {onSiteLocation.length != 0 ? " " + formatMessage(messages.onSite) + " at " + onSiteLocation[0].name : "Offsite"}
        </Status>}
        {!isFromNotification &&
          renderDropdown()
        }

        {!isFromNotification &&
          renderDescription()
        }

        {isFromNotification && (
          <LocationName>
            {crossedLocation.length ? crossedLocation[0].name : ""}
          </LocationName>
        )}

        {renderCheckIn()}

        {renderCheckOut()}


      </Container>
    </Modal>
  );
};

const Container = styled.View`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px 20px 0;
  position: relative;
`;

const CloseButton = styled(IconButton)`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 5px;
  right: 5px;
`;

const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultBoldFamily};
  font-size: 20px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
  top: -5px;

`;

const Status = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultSemiBoldFamily};
  font-size: 18px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.dark};
  text-align: left;
  top: 10px;
  margin-bottom: 10px;
`;

const LocationName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultSemiBoldFamily};
  font-size: 18px;
  line-height: 28px;
  top: 10px;
  text-align: center;
  margin-bottom: 10px;
`;

const CheckInButton = styled(GradientButton).attrs(({ theme }) => ({
  textStyle: {
    fontSize: 18,
  },
}))`
  margin-top: 30px;
  margin-bottom: 20px;
`;

const CheckOutButton = styled(GradientButton).attrs(() => ({
  textStyle: {
    fontSize: 18,
  },
}))`
  margin-top: 10px;
  margin-bottom: 30px;
`;

const FetchLocationButton = styled(GradientButton).attrs(() => ({
  textStyle: {
    fontSize: 18,
  },
}))`
  height: 50px;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const List = styled(FlatList as new () => FlatList<Organization>)`
  margin-bottom: 20px;
  top: 20px;
`;

const NoNetworkTxtStyle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  top: 10px;
  color: ${({ theme }) => theme.colors.dark};
`;


const DropDownButtonTxtStyle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
  font-size: 18px;
  line-height: 28px;
  text-align: left;
  color: ${({ theme }) => theme.colors.dark};
`;
const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultLightFamily};
  font-size: 16px;
  text-align: left;
  color: ${({ theme }) => theme.colors.dark};
  margin-top: 5px;
`;

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    height: 50,
    backgroundColor: '#E9ECEF',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginTop: 20,
  },
  tapToFetchLocationStyle: {
    height: 50,
    backgroundColor: '#E9ECEF',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    marginTop: 20,
    marginBottom: 30
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownButtonArrowStyle: {
    fontSize: 24,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  indicatorStyle: {
    color: '#151E26',
  },
});

export default memo(SiteKeyModal);
