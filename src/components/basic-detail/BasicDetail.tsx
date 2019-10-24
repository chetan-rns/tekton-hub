import React from 'react';
import {

    Card,
    Flex,
    Badge,
    FlexItem,
    Button,
    Brand,
    BaseSizes

} from '@patternfly/react-core';

import { DownloadIcon, BorderStyleIcon } from '@patternfly/react-icons';
import './BasicDetail.css'
import '@patternfly/react-core/dist/styles/base.css';
import go from './go.jpeg'
import { Split, SplitItem } from '@patternfly/react-core';

import { Avatar } from '@patternfly/react-core';
import avatarImg from './download.png';
import { Gallery, GalleryItem } from '@patternfly/react-core';
import { isModifier } from '@patternfly/react-styles';


const BasicDetail = () => {

    return (
        <Card style={{ minHeight: "10em" }}>
            {/* <Flex> 
        
                    <div className="img">
                    <Flex breakpointMods={[{modifier:"align-items-center", breakpoint:"lg"}]}>
                    <FlexItem >
                        <span className="avatar"><Avatar src={avatarImg} alt="avatar" style={{height:"5em",width:"5em"}}></Avatar></span>
                    </FlexItem>
                    </Flex>
                    </div>

                    <Flex breakpointMods={[{modifier:"flex-1", breakpoint:"lg"}]}>
                    <div className="basic-data">
                    <Flex breakpointMods={[{modifier:"column", breakpoint:"lg"}]}>
                        <FlexItem>
                            <span className="task-heading">Golang-build-task</span>
                            <p>These tasks are Golang task to build, test and validate Go projects</p>
                       </FlexItem>

                        <FlexItem>
                            <React.Fragment>
                                <Badge>Go</Badge>{' '}
                                <Badge>Build</Badge>{' '}
                                <Badge>Task</Badge>{' '}
                                <Badge>git</Badge>{' '}
                                </React.Fragment>
                        </FlexItem>
                    </Flex>
                    </div>
                    </Flex>
                 
                 
                <div className="dwnld">
                <Flex breakpointMods={[{modifier:"column", breakpoint:"lg"}]}>
                    <FlexItem>
                        <DownloadIcon />
                        {'  '}5M+
                    </FlexItem>
                    <FlexItem>
                        <Button>
                            Download
                        </Button>
                    </FlexItem>
                </Flex>
                </div>
                
            </Flex> */}
          
             <Flex breakpointMods={[{ modifier: "align-items-center", breakpoint: "lg" }]}>
                <div className="avatar">
                    <Flex breakpointMods={[{modifier:"align-self-flex-center", breakpoint:"lg"}]}>
                        <FlexItem><Avatar src={avatarImg} alt="avatar" style={{ height: "5em", width: "5em" }}></Avatar></FlexItem>
                    </Flex>
                </div>
                <Flex breakpointMods={[{ modifier: "flex-1", breakpoint: "lg" }]}>
                    {/* <span className="a"> */}
                        <FlexItem>
                            <div className="data">
                                <Flex breakpointMods={[{ modifier: "column", breakpoint: "lg" }]}>

                                    <FlexItem><span className="heading">Golang-build-task</span>
                                        <p>These tasks are Golang task to build, test and validate Go projects</p>
                                    </FlexItem>

                                    <FlexItem>
                                        <React.Fragment>
                                            <Badge>Go</Badge>{' '}
                                            <Badge>Build</Badge>{' '}
                                            <Badge>Task</Badge>{' '}
                                            <Badge>Git</Badge>{' '}
                                        </React.Fragment>
                                    </FlexItem>
                                </Flex>
                            </div>
                        </FlexItem>
                    {/* </span> */}
                </Flex>
                
                
                <div className="download">
                    <Flex breakpointMods={[{ modifier: "align-right", breakpoint: "lg" }, { modifier: "column", breakpoint: "lg" }]}>
                        <FlexItem><span className="downloadNumber"><DownloadIcon />
                            {'  '}5M+</span></FlexItem>
                        <FlexItem><span className="downloadIcon"><Button className="button">
                            Download
                        </Button></span></FlexItem>
                    </Flex>
                </div>
                
    </Flex>
        </Card> 
    );
}



export default BasicDetail;


