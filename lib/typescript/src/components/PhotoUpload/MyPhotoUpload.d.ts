export default class MyPhotoUpload extends React.Component<any, any, any> {
    static propTypes: {
        containerStyle: PropTypes.Requireable<object>;
        photoPickerTitle: PropTypes.Requireable<string>;
        maxHeight: PropTypes.Requireable<number>;
        maxWidth: PropTypes.Requireable<number>;
        format: PropTypes.Requireable<string>;
        quality: PropTypes.Requireable<number>;
        onPhotoSelect: PropTypes.Requireable<(...args: any[]) => any>;
        onError: PropTypes.Requireable<(...args: any[]) => any>;
        onTapCustomButton: PropTypes.Requireable<(...args: any[]) => any>;
        onStart: PropTypes.Requireable<(...args: any[]) => any>;
        onCancel: PropTypes.Requireable<(...args: any[]) => any>;
        onResponse: PropTypes.Requireable<(...args: any[]) => any>;
        onRender: PropTypes.Requireable<(...args: any[]) => any>;
        onResizedImageUri: PropTypes.Requireable<(...args: any[]) => any>;
        imagePickerProps: PropTypes.Requireable<object>;
        alertTitle: PropTypes.Requireable<string>;
        alertMessage: PropTypes.Requireable<string>;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    state: {
        maxHeight: any;
        maxWidth: any;
        format: any;
        quality: any;
        buttonDisabled: boolean;
    };
    options: any;
    openImagePicker: () => Promise<void>;
    renderChildren: (props: any) => any;
    componentDidUpdate(): void;
    render(): React.JSX.Element;
}
import React from "react";
import PropTypes from "prop-types";
