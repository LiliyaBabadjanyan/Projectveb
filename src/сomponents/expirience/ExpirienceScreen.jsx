import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import HeaderTopItem from "../header/HeaderTop/HeaderTopItem/HeaderTopItem";
import classes from './ExpirienceScreen.module.css';
import laptop from '../../ref/laptop/laptop.png';

const ExpirienceScreen = () => {
    const mas = [
        {
            head: '', text: 'Только системный подход – контроль версий, резервирование\n' +
                'и тестирование!'
        },
        {
            head: '', text: 'Только Drupal сайты,\n' +
                'не берем на поддержку сайты на других CMS!'
        },
    ]

    return (
        <div className={classes.bigWrapper}>
            <Container className={classes.wrapper} fluid={true}>
                <Row>

                    <Col md={6} xs={12}>
                        <div className={classes.imgWrapper}>
                            {<img className={classes.laptop} src={"src/ref/laptop/laptop.png"} alt={"laptop"}/>}
                        </div>
                    </Col>
                    <Col md={6} xs={12}>
                        <div className={classes.text}>
                            <h1 className={classes.title}>Экспертиза в Drupal,<br/> опыт 14 лет!</h1>
                            <Row>{mas.map(item => <HeaderTopItem props={item}/>)}</Row>
                        </div>
                    </Col>

                </Row>

            </Container>
        </div>
    );
};

export default ExpirienceScreen;