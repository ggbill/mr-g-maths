import React from 'react'
import { Card, CardContent, CardActionArea, CardMedia } from '@material-ui/core'
import { Link } from "react-router-dom"
import VideocamIcon from '@material-ui/icons/Videocam';
import ImageIcon from '@material-ui/icons/Image';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import DescriptionIcon from '@material-ui/icons/Description';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import './resourceBadge.scss';
import useCloudinaryFunctions from "../../hooks/useMrGFunctions"
import useMrGFunctions from "../../hooks/useMrGFunctions"

interface InputProps {
    resource: string
    matchUrl: string
    index: number
    setIsResourceBadgeClicked: () => void
}

const ResourceBadge = (props: InputProps) => {

    const mrGFunctions = useMrGFunctions()

    const cloudinaryFunctions = useCloudinaryFunctions()

    const generateLink = (): string => {
        let matchUrlSplit = props.matchUrl.split('/resource/')
        return `${matchUrlSplit[0]}/resource/${props.resource}`
    }

    return (
        <>
            {mrGFunctions.isVideoFormat(props.resource.split(".")[1]) &&
                <>

                    < Card key={props.resource} className="resource-badge">
                        <CardActionArea component={Link} to={generateLink()} onClick={props.setIsResourceBadgeClicked}>
                            <CardMedia
                                image={require("../../images/Video-icon.png")}
                                title="Click to view video!"
                            />
                            <CardContent>
                                <div className="resource-type-badge-wrapper video">
                                    <div className="resource-type-badge">
                                        <VideocamIcon />
                                    </div>
                                </div>
                                <div className="card-title-wrapper">
                                    <span>{cloudinaryFunctions.cleanFilename(props.resource)}</span>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </>
            }

            {mrGFunctions.isAudioFormat(props.resource.split(".")[1]) &&
                < Card key={props.resource} className="resource-badge">
                    <CardActionArea component={Link} to={generateLink()} onClick={props.setIsResourceBadgeClicked}>
                        <CardMedia
                            image={require("../../images/Audio-icon.png")}
                            title="Click to listen to the audio!"
                        />
                        <CardContent>
                            <div className="resource-type-badge-wrapper audio">
                                <div className="resource-type-badge">
                                    <AudiotrackIcon />
                                </div>
                            </div>
                            <div className="card-title-wrapper">
                                <span>{cloudinaryFunctions.cleanFilename(props.resource)}</span>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
            }

            {mrGFunctions.isImageFormat(props.resource.split(".")[1]) &&
                <Card key={props.resource} className="resource-badge">
                    <CardActionArea component={Link} to={generateLink()} onClick={props.setIsResourceBadgeClicked}>
                        <CardMedia
                            image={require("../../images/Image-icon.png")}
                            title="Click to view the image!"
                        />
                        <CardContent>
                            <div className="resource-type-badge-wrapper image">
                                <div className="resource-type-badge">
                                    <ImageIcon />
                                </div>
                            </div>
                            <div className="card-title-wrapper">
                                <span>{cloudinaryFunctions.cleanFilename(props.resource)}</span>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
            }

            {mrGFunctions.isPDFFormat(props.resource.split(".")[1]) &&
                <Card key={props.resource} className="resource-badge">
                    <CardActionArea component={Link} to={generateLink()} onClick={props.setIsResourceBadgeClicked}>
                        <CardMedia
                            image={require("../../images/PDF-icon.png")}
                            title="Click to view the pdf!"
                        />
                        <CardContent>
                            <div className="resource-type-badge-wrapper pdf">
                                <div className="resource-type-badge">
                                    <PictureAsPdfIcon />
                                </div>
                            </div>
                            <div className="card-title-wrapper">
                                <span>{cloudinaryFunctions.cleanFilename(props.resource)}</span>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
            }

{
                !mrGFunctions.isVideoFormat(props.resource.split(".")[1]) &&
                !mrGFunctions.isAudioFormat(props.resource.split(".")[1]) &&
                !mrGFunctions.isImageFormat(props.resource.split(".")[1]) &&
                !mrGFunctions.isPDFFormat(props.resource.split(".")[1]) &&
                <Card key={props.resource} className="resource-badge">
                    <CardActionArea component={Link} to={generateLink()} onClick={props.setIsResourceBadgeClicked}>
                        <CardMedia
                            image={require("../../images/Files-icon.png")}
                            title="Click to view the pdf!"
                        />
                        <CardContent>
                            <div className="resource-type-badge-wrapper file">
                                <div className="resource-type-badge">
                                    <DescriptionIcon />
                                </div>
                            </div>
                            <div className="card-title-wrapper">
                                <span>{cloudinaryFunctions.cleanFilename(props.resource)}</span>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
            }
        </>
    )
}

export default ResourceBadge