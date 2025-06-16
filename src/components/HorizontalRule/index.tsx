import React from 'react';
import { SafeAreaView } from 'react-native';
import styled from '../../utils/styled';

const HorizontalRule = () => {
    return (
        <SafeAreaView>
            <HorizontalView />
         </SafeAreaView>
    );
};

const HorizontalView = styled.View`
    margin-top: 10px;
    borderBottomColor: ${({ theme }) => theme.colors.black};
    borderBottomWidth: 2px;
`;

export default HorizontalRule;