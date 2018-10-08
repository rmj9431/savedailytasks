import * as React from 'react';
import { RegistrationHTMLStructure } from './registration-html';

export default class RegistrationPage extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
        };
    }

    public render() {
        return RegistrationHTMLStructure(this);
    }
}
