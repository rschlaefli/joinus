import {Button, Grid, Header, Image, Segment, Table} from "semantic-ui-react";
import TeamBild from "../../images/institut.jpg";
import React, {Component} from "react";
import Manu from "../../images/manuel.jpg";
import Pascal from "../../images/pascal.jpg";
import Rolli from "../../images/rolli.jpg";
import Nik from "../../images/nik.jpg";
import Flo from "../../images/flo.jpg";
import {EmployeeRow} from "../EmployeeRow";

class InstituteSegment extends Component {
    state = {
        institute: false,
    };

    hideInsti = () => this.setState({institute: false});
    showInsti = () => this.setState({institute: true});

    render() {
        const {backgroundColor} = this.props;
        return (
            <Segment style={{background: backgroundColor,}} vertical id="institute">
                <Grid container stackable verticalAlign='top'>
                    <Grid.Row>
                        <Header as='h2' textAlign='center' style={{fontSize: "2.5em", width: "100%"}}>
                            Das Team:
                        </Header>
                    </Grid.Row>

                    <Grid.Row centered>
                        <Button.Group style={{fontFamily: "IBM Plex Mono"}}>
                            <Button attached={"left"} style={{fontFamily: "IBM Plex Mono"}}
                                    onClick={this.hideInsti}>Informatikteam</Button>
                            <Button attached={"right"} style={{fontFamily: "IBM Plex Mono"}}
                                    onClick={this.showInsti}>Institutsteam</Button>
                        </Button.Group>
                    </Grid.Row>
                    {
                        this.state.institute && [
                        <Grid.Row style={{maxHeight: 400, height: 'auto'}}>
                            <Image centered
                                   style={{width: "70%", height: "100%", objectFit: 'cover', borderRadius: '3px',}}
                                   src={TeamBild}/>
                        </Grid.Row>,
                            <Grid.Row centered>
                                <p>Gesamthaft sind wir rund 250 Mitarbeiter, Professoren und Forscher.</p>
                            </Grid.Row>
                        ]
                    }
                    {
                        ! this.state.institute && [
                            <Grid.Row centered>
                                <Header as='h4'>
                                    Unsere Informatik-Mitarbeiter
                                </Header>
                            </Grid.Row>,
                            <Grid.Row centered>
                                <Table basic='very' celled collapsing unstackable>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell> </Table.HeaderCell>
                                            <Table.HeaderCell>Studienrichtung</Table.HeaderCell>
                                            <Table.HeaderCell>Aktuelle Projekte</Table.HeaderCell>
                                            <Table.HeaderCell style={{minWidth:"55px"}}>Am Institut seit</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                        <EmployeeRow
                                            name="Pascal"
                                            picture={Pascal}
                                            team="Administration"
                                            study='Master Informatics'
                                            tasklist={['Weiterentwicklung Management Information System', 'Modernisierung bf.uzh.ch']}
                                            time='2.5 Jahren'
                                        />
                                        <EmployeeRow
                                            name="Roli"
                                            picture={Rolli}
                                            team="Teaching Center"
                                            study='Master Informatics'
                                            tasklist={['Klicker UZH', 'Jobeye']}
                                            time='3.5 Jahren'
                                        />
                                        <EmployeeRow
                                            name="Nik"
                                            picture={Nik}
                                            team="Weiterbildung"
                                            study='Bachelor Informatics'
                                            tasklist={['Redesign Weiterbildungs Webseite', 'Betreuung SFI OLAT']}
                                            time='2 Jahren'
                                        />
                                        <EmployeeRow
                                            name="Manuel"
                                            picture={Manu}
                                            team="Weiterbildung"
                                            study='Master Wirtschaftsinformatik'
                                            tasklist={['Dynamics CRM Customizing', 'CRM Anbindung für Webseite']}
                                            time='1.5 Jahren'
                                        />
                                        <EmployeeRow
                                            name="Flo"
                                            picture={Flo}
                                            team="Administration"
                                            study='Master Data Science'
                                            tasklist={['Redesign Webseite']}
                                            time='2.5 Jahren'
                                        />
                                    </Table.Body>
                                </Table>
                            </Grid.Row>
                        ]
                    }

                </Grid>
            </Segment>
        )
    };
}

export default InstituteSegment;