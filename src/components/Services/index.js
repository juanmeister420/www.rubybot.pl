import React from 'react';
import Icon1 from '../../images/Icon1.svg';
import Icon2 from '../../images/Icon2.svg';
import Icon3 from '../../images/Icon3.svg';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Nasze zalety</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>jedenkajsdkasj</ServicesH2>
                    <ServicesP>
                        jkasdjlasjdladjka
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>lklklklklklk</ServicesH2>
                    <ServicesP>
                        wewewewe
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>tutututu</ServicesH2>
                    <ServicesP>
                        srutu tutut
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
