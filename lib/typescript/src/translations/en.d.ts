declare const _default: {
    components: {
        chatModal: {
            iNeedHelp: string;
            someoneSuspicious: string;
        };
        callModal: {
            wantCall: string;
            emergency: string;
            organization: string;
            call911: string;
        };
        siteKeyModal: {
            siteKey: string;
            status: string;
            onSite: string;
            checkInOnSite: string;
            checkOutOffSite: string;
            description: string;
            noNetworkMessage: string;
            tapToFetchLocation: string;
            selectLocation: string;
        };
        newTipCamera: {
            back: string;
            canceled: string;
            permissionWarning: string;
            permissionCameraBody: string;
            permissionRecordAudioBody: string;
            ok: string;
            cancel: string;
        };
        imageUpload: {
            info: string;
            updateInfo: string;
            uploadSuccess: string;
            uploadFailure: string;
            deleteSuccess: string;
            deleteFailure: string;
            incidentCo: string;
            requiredPermisson: string;
        };
        panicInfo: {
            panicInfo: string;
        };
    };
    containers: {
        warningScreen: {
            message: string;
            call911: string;
            button: string;
            duress: string;
            locationMessage: string;
        };
        welcomeScreen: {
            emergency: {
                title: string;
                text: string;
            };
            live: {
                title: string;
                text: string;
            };
            safety: {
                title: string;
                text: string;
            };
            panic: {
                title: string;
                text: string;
            };
            tip: {
                title: string;
                text: string;
            };
            skip: string;
        };
        signInScreen: {
            agreeTos: string;
            phonePlaceholder: string;
            sendCode: string;
            title: string;
            subTitle: string;
            countryCode: string;
            phoneLength: string;
            phoneRequired: string;
            agreeTosRequired: string;
            tos: string;
            privacyPolicy: string;
        };
        signInCodeScreen: {
            title: string;
            resendCode: string;
            codePlaceholder: string;
            invalidCode: string;
            codeResent: string;
            next: string;
        };
        promoCodeScreen: {
            title: string;
            codePlaceholder: string;
            invalidCode: string;
            codeResent: string;
            next: string;
        };
        updateNameScreen: {
            title: string;
            privacy: string;
            firstNamePlaceholder: string;
            lastNamePlaceholder: string;
            nameValidate: string;
            next: string;
        };
        addUserPortraitScreen: {
            title: string;
            info: string;
            next: string;
            optional: string;
        };
        selectOrganizationScreen: {
            title: string;
            info: string;
            searchPlaceholder: string;
            next: string;
            select: string;
            required: string;
        };
        permissionScreen: {
            location: string;
            camera: string;
            microphone: string;
            title: string;
            allow: string;
            notYet: string;
            openPermissionsConfig: string;
        };
        permissionLocationScreen: {
            location: string;
            title: string;
            settings: string;
            enabled: string;
            allowAllTime: string;
            allow: string;
        };
        activateGPSScreen: {
            title: string;
            activateGPS: string;
            gpsEnabled: string;
            gpsDisabled: string;
            continue: string;
        };
        videoRecordScreen: {
            continue: string;
            cancelIncidentTitle: string;
            cancelIncidentMessage: string;
            no: string;
            yes: string;
            tipCreatedTitle: string;
            tipCreatedMessage: string;
            acknowledgment: string;
            seeMyTip: string;
            checkingPermissions: string;
            permissionsBlockedMessage: string;
            tryAgain: string;
            openSettings: string;
            fastAccess: string;
            fastAccessRest: string;
            open: string;
            escort: string;
        };
        organizationNotifyScreen: {
            title: string;
            info: string;
            call911Title: string;
            call911Info: string;
            call911: string;
            continue: string;
        };
        incidentCategoryScreen: {
            title: string;
            info: string;
            continue: string;
        };
        addCommentScreen: {
            title: string;
            info: string;
            inputPlaceholder: string;
            createTip: string;
            acknowledgment: string;
        };
        myTipsScreen: {
            title: string;
            address: string;
            confirmButtonText: string;
            confirmDescription: string;
            confirmTitle: string;
            noAddress: string;
            noIncidentsMessage: string;
            noIncidentsTitle: string;
            shareMessages: string;
            shareTitle: string;
            violationInfo: string;
            escort: string;
            passiveEscort: string;
        };
        tipDetailScreen: {
            tipClosed: string;
            tipClosedDetail: string;
            ok: string;
        };
        myAccountScreen: {
            title: string;
            info: string;
            description: string;
            firstNamePlaceholder: string;
            lastNamePlaceholder: string;
            nameValidate: string;
            update: string;
            deleteAccount: string;
            logout: string;
            accountUpdated: string;
            portraitSuccess: string;
            portraitFailure: string;
            removePortraitFailure: string;
            removePortraitSuccess: string;
            deleteAccountMessage: string;
            logoutMessage: string;
            yes: string;
            no: string;
        };
        feedbackScreen: {
            title: string;
            info: string;
            emailInput: string;
            commentInput: string;
            guideDescription: string;
            guideText: string;
            faq: string;
            privacy: string;
            tos: string;
            send: string;
            wrongEmail: string;
            emptyComment: string;
            feedbackSentTitle: string;
            feedbackSentDescription: string;
            ok: string;
            locationLogDesc: string;
            locationLogButton: string;
        };
        organizationScreen: {
            alert: string;
            title: string;
            addNewOrganization: string;
        };
        contactScreen: {
            addContactTitle: string;
            info: string;
            footerMax: string;
            noContacts: string;
            noMatches: string;
            searchPlaceholder: string;
            title: string;
            contactPermissionError: string;
            warning: string;
        };
        settingScreen: {
            title: string;
            beaconSetUp: string;
            beaconSetUpSuccessful: string;
            step1: string;
            step1_desc: string;
            timing: string;
            step2: string;
            battery_level: string;
            bullet: string;
        };
        notificationScreen: {
            title: string;
            description: string;
            warning: string;
            deleteAccount: string;
            deleteAccountMessage: string;
            logout: string;
            logoutMessage: string;
            yes: string;
            no: string;
        };
        notificationListScreen: {
            title: string;
            noRecords: string;
            markReadAll: string;
            msgMarkReadAll: string;
            yes: string;
            no: string;
        };
        escort: {
            selectOrganizationScreen: {
                title: string;
                info: string;
                addComment: string;
                commentPlaceholder: string;
                call911Title: string;
                call911Info: string;
                call911: string;
                manageOrganizations: string;
                requestEscort: string;
            };
            requestScreen: {
                requestEscort: string;
                timedTitle: string;
                timedMessage: string;
                panicTitle: string;
                panicMessage: string;
                liveTitle: string;
                liveMessage: string;
                cancelRequest: string;
                cancelEscortModalTitle: string;
                cancelEscortModalInfo: string;
                cancelEscort: string;
                continueEscort: string;
            };
            recordScreen: {
                shareVideo: string;
                audioOnly: string;
                imSafe: string;
                panic: string;
                sharingAudio: string;
                escort: string;
                safeModalTitle: string;
                safeModalInfo: string;
                safeModalCommentPlaceholder: string;
                safeModalCancel: string;
                safeModalContinue: string;
                endPanic: string;
                exitPanicModalTitle: string;
                exitPanicModalInfo: string;
                exitPanicModalPlaceholder: string;
                exitPanicModalCancel: string;
                exitPanicModalConfirm: string;
                exitPanicModalInputValidation: string;
                escortClosed: string;
                escortClosedDetail: string;
                ok: string;
                timerExpired: string;
            };
            escortTypeScreen: {
                title: string;
                incidentCo: string;
                safetyEscortLabel: string;
                safetyEscortButton: string;
                timedEscortLabel: string;
                timedEscortButton: string;
                liveEscortLabel: string;
                liveEscortButton: string;
                checkingPermissions: string;
                permissionsBlockedMessage: string;
                tryAgain: string;
                openSettings: string;
                beacons: string;
                myAccount: string;
                notifications: string;
                settings: string;
                organizations: string;
                feedbacks: string;
                mytips: string;
                contacts: string;
                newTip: string;
                siteKey: string;
                yourServices: string;
            };
            timedEscortScreen: {
                timedChecklist: {
                    title: string;
                    info: string;
                    call911Title: string;
                };
                safetyTimer: {
                    title: string;
                    info: string;
                    call911Title: string;
                };
                call911Info: string;
                call911: string;
                manageOrganizations: string;
                selectProcedure: string;
                procedureSelection: string;
                noProcedures: string;
                next: string;
            };
            countdownScreen: {
                checklistTitle: string;
                safetyTitle: string;
                preCountdown: string;
                safetyPreCountdown: string;
                timerStart: string;
                timedEscortSubheader: string;
                timerNumberValidation: string;
                timerMaxValueValidation: string;
                setTimerHeader: string;
                hoursPlaceholder: string;
                minutesPlaceholder: string;
                secondsPlaceholder: string;
                setTimerSubmit: string;
                safetyBtn: string;
                panic: string;
                endPanic: string;
                exitPanicModalTitle: string;
                exitPanicModalInfo: string;
                exitPanicModalPlaceholder: string;
                exitPanicModalCancel: string;
                exitPanicModalConfirm: string;
                exitPanicModalInputValidation: string;
                requestEscortTitle: string;
                panicRequestEscortTitle: string;
                requestEscortMessage: string;
                panicRequestEscortMessage: string;
                openPermissionsConfig: string;
                safeModalTitle: string;
                safeModalInfo: string;
                safeModalCommentPlaceholder: string;
                safeModalAlert: string;
                safeModalCancel: string;
                safeModalContinue: string;
            };
        };
    };
    bottomMenu: {
        myTips: string;
        contacts: string;
        beacons: string;
        myAccount: string;
        notifications: string;
        settings: string;
        organizations: string;
        feedbacks: string;
        mytips: string;
        panic: string;
    };
    errors: {
        noLocation: string;
        title: string;
    };
    alarmNotification: {
        yes: string;
        no: string;
    };
};
export default _default;
