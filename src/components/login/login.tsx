import * as React from 'react';
import { LoginHTMLStructure } from './login-html';

export default class LoginPage extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
        };
    }

    public render() {
        return LoginHTMLStructure(this);
    }
}
