import { Button } from '@material-ui/core';
import React from 'react';
// import I18n from '@iobroker/adapter-react/i18n';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import cls from './style.module.scss';

const CustomButton = ({ fullWidth, size, onClick, style, className, value, square }) => {
    return <Button
        variant="outlined"
        color="primary"
        onClick={onClick}
        fullWidth={fullWidth}
        style={style}
        className={clsx(cls.root, className, square ? cls.square : '')}
        margin="normal"
        size={size}
    >{value}</Button>;
}

CustomButton.defaultProps = {
    value: '',
    className: null,
    variant: 'standard',
    size: 'medium',
    fullWidth: false,
    square: false
};

CustomButton.propTypes = {
    title: PropTypes.string,
    attr: PropTypes.string,
    type: PropTypes.string,
    style: PropTypes.object,
};

export default CustomButton;