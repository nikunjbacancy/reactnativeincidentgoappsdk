export default {
  components: {
    chatModal: {
      iNeedHelp: 'I need help',
      someoneSuspicious: 'someone suspicious',
    },
    callModal: {
      wantCall: 'Who do you want to call?',
      emergency: 'Emergency',
      organization: 'Organization',
      call911: 'Call 911',
    },
    siteKeyModal: {
      siteKey: "SiteKey",
      status: "Status",
      onSite: "Onsite",
      checkInOnSite: "Check In: Onsite",
      checkOutOffSite: "Check Out: Offsite",
      description: "Please select the location to check in onsite or offsite.",
      noNetworkMessage: "No network connection.",
      tapToFetchLocation:"Tap to fetch locations",
      selectLocation:"Select Location"
      
    },
    newTipCamera: {
      back: 'Back',
      canceled: 'Canceled',
      permissionWarning: 'Permission Warning',
      permissionCameraBody: 'This app needs camera permission to work.',
      permissionRecordAudioBody: 'This app needs camera permission to work.',
      ok: 'Ok',
      cancel: 'Cancel',
    },
    imageUpload: {
      info: 'Tap image to upload',
      updateInfo: 'Tap the trash can to delete',
      uploadSuccess: 'Upload Successful',
      uploadFailure: 'Upload Failed',
      deleteSuccess: 'Image Removed',
      deleteFailure: 'Deletion Failed',
      incidentCo: 'INCIDENT GO',
      requiredPermisson: 'Permission required for access photo gallery'
    },
    panicInfo: {
      panicInfo: 'Press 2 seconds to activate Panic',
    },
  },
  containers: {
    warningScreen: {
      message: 'Warning!\nIf this is an emergency',
      call911: 'Call 911',
      button: 'Continue',
      duress: 'Panic',
      locationMessage: 'IncidentGO will share your location in the background for sitekey, panic button, safety timer, timed checklist, and virtual escort with security personnel when requesting assistance.'
    },
    welcomeScreen: {
      emergency: {
        title:
          'Incident Go is an On-Demand safety service that was created to bring peace of mind.',
        text:
          'Security Agents are available 24/7 to help with any security-based need.',
      },
      live: {
        title: 'Live Security Escort',
        text:
          'Never walk alone. Turn your phone’s camera and audio into a live streaming device connected to a Security Agent, who will assist you safely to your destination.',
      },
      safety: {
        title: 'Safety Timer',
        text:
          'The Safety Timer enables you to set a timer that sends an alert to your Security Agent upon its expiration. The Security Agent then contacts you to ensure your safety.',
      },
      panic: {
        title: 'Panic Button',
        text:
          'Panic buttons are available throughout the app. A simple 2-second press of the panic button alerts your Security Agent that immediate assistance is required, while sending video, audio, and GPS.',
      },
      tip: {
        title: 'Security Tip',
        text:
          'Take a video or discretely chat with a live Security Agent for an immediate response.',
      },
      skip: 'Skip',
    },
    signInScreen: {
      agreeTos: 'By creating an account, I agree to the {tos} and {privacyPolicy}.',
      phonePlaceholder: 'e.g. (123 555-1234)',
      sendCode: 'Send code for validation',
      title:
        'Enter your phone number to register.\nBy providing your phone number, you agree to receive text messages from Incident Co. Message and data rates may apply. Message frequency varies.',
      subTitle: 'By providing your phone number, you agree to receive text messages from Incident Co. Messages and data rates may apply. Message frequency varies.',
      countryCode: 'US+1',
      phoneLength: 'Number must be 10 digits',
      phoneRequired: 'Required',
      agreeTosRequired: 'You must accept the terms to proceed',
      tos: 'Terms and conditions',
      privacyPolicy: 'Privacy policy'
    },
    signInCodeScreen: {
      title:
        'Please enter the 4-digit code from the text message you received, or select {resendCode}',
      resendCode: 'resend code',
      codePlaceholder: 'Validate code',
      invalidCode:
        'The code you entered is incorrect.\nPlease check you entered the correct phone number and then try again, or resend a code if needed.',
      codeResent: 'Resend code',
      next: 'Validate',
    },
    promoCodeScreen: {
      title:
        'Please enter passcode',
      codePlaceholder: 'Passcode',
      invalidCode:
        'The code you entered is incorrect.\nPlease check you entered the correct phone number and then try again, or resend a code if needed.',
      codeResent: 'Resend code',
      next: 'Next',
    },
    updateNameScreen: {
      title: 'Enter your name',
      privacy:
        'Your name is private and will only be released when you decide to share a tip with your organization or contacts.',
      firstNamePlaceholder: 'First name',
      lastNamePlaceholder: 'Last name',
      nameValidate: 'This field is required',
      next: 'Validate',
    },
    addUserPortraitScreen: {
      title: 'Add your photo',
      info: 'Please select or take a photo for your profile {optional}',
      next: 'Continue',
      optional: '(optional)',
    },
    selectOrganizationScreen: {
      title: 'Organizations',
      info: 'Please select your organization {required}',
      searchPlaceholder: 'Search organizations',
      next: 'Continue',
      select: 'Continue',
      required: '(required)',
    },
    permissionScreen: {
      location:
        'IncidentGO will share your location in the background for sitekey, panic button, safety timer, timed checklist, and virtual escort with security personnel when requesting assistance.',
      camera:
        'This app uses video to let you record, in order to maximize the sharing of actionable information.',
      microphone:
        'This app uses your mic to allow video’s to have audio, giving pertinent information.',
      title:
        'In order to use the Incident GO app, please allow the app to use location, mic and camera services.',
      allow: 'Allow',
      notYet: 'Not yet',
      openPermissionsConfig:
        'All Incident GO permissions must be accepted to proceed',
    },
    permissionLocationScreen: {
      location:
        'To allow the application to track your location and determine which incidents occur around your area and collect location data for sitekey, set the Location Access to ALWAYS.',
      // location:
      //   'To allow the application for your location tracking to determine which Incidents occur around your area set the Location Access to ALWAYS.',
      title:
        'In order to use the Incident GO app, please allow the app to use location services.',
      settings: 'Settings',
      enabled: 'Yes, Already Enabled',
      allowAllTime:'Allow all the time',
      allow: 'Allow',
    },
    activateGPSScreen: {
      title:
        'In order for the app to help you we will need you to authorize and active your GPS. Thanks',
      activateGPS: 'Activate GPS',
      gpsEnabled: 'GPS Enabled',
      gpsDisabled: 'GPS Disabled',
      continue: 'Continue',
    },
    videoRecordScreen: {
      continue: 'Continue',
      cancelIncidentTitle: 'Do you really want to cancel creating this tip?',
      cancelIncidentMessage:
        'This action will delete videos you have recorded for this incident.',
      no: 'No',
      yes: 'Yes',
      tipCreatedTitle: 'Tip for {organizationName} was successfully created!',
      tipCreatedMessage:
        'You can now add more videos and chat with the organization on the tip page.',
      acknowledgment: 'Thank you!',
      seeMyTip: 'Open this tip',
      checkingPermissions: 'Checking permissions',
      permissionsBlockedMessage:
        'This app needs camera and microphone permission to work',
      tryAgain: 'Try again',
      openSettings: 'Open settings',
      fastAccess: 'FAST ACCESS',
      fastAccessRest: ' to your last reported tip',
      open: 'Open',
      escort: 'Escort',
    },
    organizationNotifyScreen: {
      title: 'New tip',
      info:
        'Select the organization to notify.\nSelecting an organization will create a new tip.',
      call911Title:
        'There are no available organizations to report at this location. Your tip will be sent to your contact list.',
      call911Info: 'If this is an emergency, please',
      call911: 'Call 911',
      continue: 'Continue',
    },
    incidentCategoryScreen: {
      title: 'New tip',
      info:
        'Select a type of incident for the tip you are reporting to {organizationName}',
      continue: 'Continue',
    },
    addCommentScreen: {
      title: 'New tip',
      info:
        'To add more information for {organizationName} about this tip, you can enter a comment bellow:',
      inputPlaceholder: 'Commentary (optional)',
      createTip: 'Create tip',
      acknowledgment:
        'Thank you for sharing this information. This tip will be reported to {organizationName}.',
    },
    myTipsScreen: {
      title: 'My tips',
      address: 'Address:',
      confirmButtonText: 'Delete',
      confirmDescription: 'Are you sure you want to delete this Incident tip?',
      confirmTitle: 'Delete Tip',
      noAddress: 'Incident has no address.',
      noIncidentsMessage: 'Your incident tips will be stored here.',
      noIncidentsTitle: 'You have not created incident tips yet.',
      shareMessages: '${userName} has created incident tip, see ${url}',
      shareTitle: 'Do you want to share this incident?',
      violationInfo:
        "This video has been flagged as '${type}' and will be hidden until reviewed by an admin.",
      escort: 'Escort',
      passiveEscort: 'Passive Escort',
    },
    tipDetailScreen: {
      tipClosed: 'TIP CLOSED',
      tipClosedDetail: 'The tip was closed by the admin',
      ok: 'OK',
    },
    myAccountScreen: {
      title: 'My Account',
      info: 'This info will be displayed for your contacts',
      description: 'Your full name',
      firstNamePlaceholder: 'First name',
      lastNamePlaceholder: 'Last name',
      nameValidate: 'These fields are required',
      update: 'Update',
      deleteAccount: 'Delete Account',
      logout: 'Logout',
      accountUpdated: 'Account updated',
      portraitSuccess: 'Upload Successful',
      portraitFailure: 'Upload Failed',
      removePortraitFailure: 'Deletion Failed',
      removePortraitSuccess: 'Image Successfully Removed',
      deleteAccountMessage: 'Are you sure you want to delete your account?',
      logoutMessage: 'Are you sure you want to logout?',
      yes: 'Yes',
      no: 'No',

    },
    feedbackScreen: {
      title: 'Feedback',
      info: 'Have comments?\nQuestions? Send us an email!',
      emailInput: 'Your email',
      commentInput: 'Your message',
      guideDescription:
        'You can also view the {guideText}, {faq}, {privacy} and {tos}',
      guideText: 'Quick-start Guide',
      faq: 'FAQ',
      privacy: 'Privacy',
      tos: 'Terms of Use',
      send: 'Send',
      wrongEmail: 'Place input correct email',
      emptyComment: 'Place input comment',
      feedbackSentTitle: 'Thank you! Your message has been sent.',
      feedbackSentDescription: 'We’ll get back to you soon.',
      ok: 'Ok',
      locationLogDesc:
        'Click below to email the device location log to developers',
      locationLogButton: 'Send Log',
    },
    organizationScreen: {
      alert: 'Must select at least one organizations',
      title: 'Organizations',
      addNewOrganization: 'Add new organization',
    },
    contactScreen: {
      addContactTitle: 'Add contact',
      info:
        'Add contacts that will receive a text message when you create a tip.',
      footerMax:
        'You are at your maximum allowable contacts. Please remove a contact to add more.',
      noContacts: 'No contacts added',
      noMatches: 'No matches found',
      searchPlaceholder: 'Search contacts',
      title: 'Contacts',
      contactPermissionError:
        'You must change your phone system settings to allow this app to access your contacts.',
      warning:
        'Listed contacts will automatically receive a text message with the link to your tip.',
    },
    settingScreen: {
      title: 'Manage Beacons',
      beaconSetUp: 'Connect to Beacon',
      beaconSetUpSuccessful: 'Beacon Successfully Connected',
      step1: 'Step 1 - Activate your device',
      step1_desc: 'Press and hold your device for 10 seconds until you hear a beep and the light flashes green, then release the button.',
      timing: '10 seconds',
      step2: 'Step 2 - Choose a device',
      battery_level: 'Battery Level',
      bullet: '\u2B24'
    },
    notificationScreen: {
      // title: 'Notifications',
      title: 'Settings',
      description: 'Notification Permission',
      warning: 'Enable Notification permission to receive push Notifications.',
      deleteAccount: "Delete Account",
      deleteAccountMessage: 'Are you sure you want to delete your account?',
      logout: 'Logout',
      logoutMessage: 'Are you sure you want to logout?',
      yes: 'Yes',
      no: 'No',
    },
    notificationListScreen: {
      title: 'Notifications',
      noRecords: 'No notification found',
      markReadAll: "Mark as Read All",
      msgMarkReadAll: "Are you sure you want to mark as read all notifications?",
      yes: 'Yes',
      no: 'No',
    },
    escort: {
      selectOrganizationScreen: {
        title: 'Live Security Escort',
        info: 'To start Live Security Escort, please select organization:',
        addComment: 'Add your comment for security personnel.',
        commentPlaceholder: 'Your comment (optional)',
        call911Title:
          'Unfortunately,\nnone of your organizations support Live Security Escorts.',
        call911Info: 'If this is an emergency, please',
        call911: 'Call 911',
        manageOrganizations: 'Manage my organizations',
        requestEscort: 'Request escort',
      },
      requestScreen: {
        requestEscort: 'Request escort',
        timedTitle:
          'Countdown expired requesting Live Security Escort, please wait...',
        timedMessage:
          'When the Live Security Escort starts, a member of security personnel will escort you by following your position.\n\nYou will also be required to share either your phone’s audio or video with them.\n\nA panic button will be available if you need immediate assistance.',
        panicTitle:
          'Panic initated requesting Live Security Escort, please wait...',
        panicMessage:
          'When the Live Security Escort starts, a member of security personnel will escort you by following your position.\n\nYou will also be required to share either your phone’s audio or video with them.',
        liveTitle:
          'Your Live Security Escort request is pending, please wait...',
        liveMessage:
          'When the Live Security Escort starts, a member of security personnel will escorting you by following your position.\n\nYou will also be required to share either your phone’s audio or video with him/her.\n\nA panic button will be available if you need immediate assistance.',
        cancelRequest: 'Cancel request',
        cancelEscortModalTitle:
          'This action\nwill cancel this escort request, but you will be able to restart it again afterwards.',
        cancelEscortModalInfo:
          'A panic button will be available if you need immediate assistance.',
        cancelEscort: 'Cancel escort',
        continueEscort: 'Continue escort',
      },
      recordScreen: {
        shareVideo: 'SHARING\nVIDEO',
        audioOnly: 'AUDIO\nONLY',
        imSafe: 'I’m safe',
        panic: 'PANIC',
        sharingAudio: 'SHARING\nAUDIO',
        // escort: 'Escort - {organizationName}',
        escort: 'Escort',
        safeModalTitle: 'Are you safe?',
        safeModalInfo:
          'Click << Continue >> to finish\nthis Live Security Escort and report that you are safe.\nPlease observe your\nsurroundings first!',
        safeModalCommentPlaceholder: 'Add a comment here (optional)',
        safeModalCancel: 'CANCEL',
        safeModalContinue: 'CONTINUE',
        endPanic: 'END PANIC',
        exitPanicModalTitle: 'Exit Panic Mode?',
        exitPanicModalInfo:
          "To exit, please type EXIT below and click 'Confirm'",
        exitPanicModalPlaceholder: 'Type EXIT here',
        exitPanicModalCancel: 'CANCEL',
        exitPanicModalConfirm: 'CONFIRM',
        exitPanicModalInputValidation: 'Please try again',
        escortClosed: 'SECURITY ESCORT CLOSED',
        escortClosedDetail: 'The security escort was closed by the admin',
        ok: 'OK',
        timerExpired: 'Timer Expired',
      },
      escortTypeScreen: {
        title: 'Select Escort',
        incidentCo: 'INCIDENT GO',
        safetyEscortLabel:
          'Set the timer and if it expires before you cancel, a panic alert will be sent.',
        safetyEscortButton: 'Safety Timer',
        timedEscortLabel:
          'Complete a pre-defined checklist in a given time, or a panic alert will be sent.',
        timedEscortButton: 'Timed Checklist',
        liveEscortLabel: 'A live security professional will assist you.',
        liveEscortButton: 'Live Security Escort',
        checkingPermissions: 'Checking permissions',
        permissionsBlockedMessage:
          'This app needs camera and microphone permission to work',
        tryAgain: 'Try again',
        openSettings: 'Open settings',
        beacons: 'Manage Beacons',
        myAccount: 'My Account',
        notifications: 'Notifications',
        settings: 'Settings',
        organizations: 'Organizations',
        feedbacks: 'Feedback',
        mytips: 'My Tips',
        contacts: 'Contacts',
        newTip: 'Security Tip',
        siteKey: 'SiteKey',
        yourServices : "Your Services"
      },
      timedEscortScreen: {
        timedChecklist: {
          title: 'Timed Checklist',
          info: 'To start a Timed Checklist, please select your organization:',
          call911Title:
            'Unfortunately,\nnone of your organizations support Timed Checklists.',
        },
        safetyTimer: {
          title: 'Safety Timer',
          info: 'To start a Safety Timer, please select your organization:',
          call911Title:
            'Unfortunately,\nnone of your organizations support Safety Timer.',
        },
        call911Info: 'If this is an emergency, please',
        call911: 'Call 911',
        manageOrganizations: 'Manage my organizations',
        selectProcedure: 'Select Procedure',
        procedureSelection: 'Procedure Type Selection',
        noProcedures: 'There are no procedures available for your organization',
        next: 'Next',
      },
      countdownScreen: {
        checklistTitle: 'Timed Checklist',
        safetyTitle: 'Safety Timer',
        preCountdown: 'Checklist items will appear once you start the timer',
        safetyPreCountdown:
          'When the timer expires, an alert will be sent to your Security Agent.',
        timerStart: 'Start Timer',
        timedEscortSubheader: '{procedure} Procedure',
        timerNumberValidation: 'Value must be a whole number',
        timerMaxValueValidation: 'value cannot exceed',
        setTimerHeader: 'Set Countdown Timer',
        hoursPlaceholder: 'HH',
        minutesPlaceholder: 'MM',
        secondsPlaceholder: 'SS',
        setTimerSubmit: 'Set Timer',
        safetyBtn: "I'm safe",
        panic: 'PANIC',
        endPanic: 'END PANIC',
        exitPanicModalTitle: 'Exit Panic Mode?',
        exitPanicModalInfo:
          "To exit, please type EXIT below and click 'Confirm'",
        exitPanicModalPlaceholder: 'Type EXIT here',
        exitPanicModalCancel: 'CANCEL',
        exitPanicModalConfirm: 'CONFIRM',
        exitPanicModalInputValidation: 'Please try again',
        requestEscortTitle:
          'Countdown expired requesting Live Security Escort, please wait...',
        panicRequestEscortTitle:
          'Panic initated requesting Live Security Escort, please wait...',
        requestEscortMessage:
          'When the Live Security Escort starts, a member of security personnel will escort you by following your position.\n\nYou will also be required to share either your phone’s audio or video with them.\n\nA panic button will be available if you need immediate assistance.',
        panicRequestEscortMessage:
          'When the Live Security Escort starts, a member of security personnel will escort you by following your position.\n\nYou will also be required to share either your phone’s audio or video with them.',
        openPermissionsConfig:
          'All Incident GO permissions must be accepted to proceed',
        safeModalTitle: 'Are you safe?',
        safeModalInfo:
          'Type your initials in the box below and press <<Continue>> to finish the Escort.',
        safeModalCommentPlaceholder: 'Add your initials here',
        safeModalAlert: 'Please observe your surroundings first',
        safeModalCancel: 'CANCEL',
        safeModalContinue: 'CONTINUE',
      },
    },
  },
  bottomMenu: {
    myTips: 'My Tips',
    contacts: 'Contacts',
    beacons: 'Manage Beacons',
    myAccount: 'My Account',
    notifications: 'Notifications',
    settings: 'Settings',
    organizations: 'Organizations',
    feedbacks: 'Feedback',
    mytips: 'My Tips',
    panic: 'Panic',
  },
  errors: {
    noLocation: 'The app is fetching your location, please try later.',
    title: 'Something went wrong...',
  },
  alarmNotification: {
    yes: "Yes",
    no: "No"
  }
};
