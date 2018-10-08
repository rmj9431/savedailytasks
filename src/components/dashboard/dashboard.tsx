import * as React from 'react';
import { DashboardHTMLStructure } from './dashboard-html';

export default class DashboardPage extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
        };
    }

    public render() {
        return DashboardHTMLStructure(this);
    }
}
