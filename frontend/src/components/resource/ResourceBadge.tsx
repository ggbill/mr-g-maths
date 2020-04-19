import React from 'react'
import { Card, CardContent, CardActionArea, CardMedia } from '@material-ui/core'
import { Link } from "react-router-dom"
import VideocamIcon from '@material-ui/icons/Videocam';
import ImageIcon from '@material-ui/icons/Image';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import DescriptionIcon from '@material-ui/icons/Description';
import './resourceBadge.scss';
import useCloudinaryFunctions from "../../hooks/useCloudinaryFunctions"

interface InputProps {
    resource: any
    matchUrl: string
    index: number
    setIsResourceBadgeClicked: () => void
}

const ResourceCard = (props: InputProps) => {

    const cloudinaryFunctions = useCloudinaryFunctions()

    const generateLink = (): string => {
        let matchUrlSplit = props.matchUrl.split('/resource/')
        return `${matchUrlSplit[0]}/resource/${props.resource.filename}`
    }

    return (
        <>
            {props.resource.resource_type === "video" && !cloudinaryFunctions.isAudioFormat(props.resource.format) &&
                <>

                    < Card key={props.resource.name} className="resource-badge">
                        <CardActionArea component={Link} to={generateLink()} onClick={props.setIsResourceBadgeClicked}>
                        {/* <CardActionArea component={Link} to={`${props.matchUrl}/resource/${props.resource.filename}`}> */}
                            <CardMedia
                                image={cloudinaryFunctions.generateThumbnailUrl(props.resource.secure_url)}
                                title="Click to view video!"
                            />
                            <CardContent>
                                <div className="resource-type-badge-wrapper video">
                                    <div className="resource-type-badge">
                                        <VideocamIcon />
                                    </div>
                                </div>
                                <div className="card-title-wrapper">
                                    <span>{cloudinaryFunctions.cleanFilename(props.resource.filename)}</span>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </>
            }

            {props.resource.resource_type === "video" && cloudinaryFunctions.isAudioFormat(props.resource.format) &&
                < Card key={props.resource.name} className="resource-badge">
                    <CardActionArea component={Link} to={`${props.matchUrl}/resource/${props.resource.filename}`}>
                        <CardMedia
                            image={require("../../images/audio_placeholder.png")}
                            title="Click to listen to the audio!"
                        />
                        <CardContent>
                            <div className="resource-type-badge-wrapper audio">
                                <div className="resource-type-badge">
                                    <AudiotrackIcon />
                                </div>
                            </div>
                            <div className="card-title-wrapper">
                                <span>{cloudinaryFunctions.cleanFilename(props.resource.filename)}</span>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
            }

            {props.resource.resource_type === "image" && !cloudinaryFunctions.isPDFFormat(props.resource.format) &&
                <Card key={props.resource.name} className="resource-badge">
                    <CardActionArea component={Link} to={`${props.matchUrl}/resource/${props.resource.filename}`}>
                        <CardMedia
                            image={props.resource.secure_url}
                        />
                        <CardContent>
                            <div className="resource-type-badge-wrapper image">
                                <div className="resource-type-badge">
                                    <ImageIcon />
                                </div>
                            </div>
                            <div className="card-title-wrapper">
                                <span>{cloudinaryFunctions.cleanFilename(props.resource.filename)}</span>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
            }

            {props.resource.resource_type === "image" && cloudinaryFunctions.isPDFFormat(props.resource.format) &&
                <Card key={props.resource.name} className="resource-badge">
                    <CardActionArea component={Link} to={`${props.matchUrl}/resource/${props.resource.filename}`}>
                        <CardMedia
                            image={cloudinaryFunctions.generateThumbnailUrl(props.resource.secure_url)}
                        />
                        <CardContent>
                            <div className="resource-type-badge-wrapper pdf">
                                <div className="resource-type-badge">
                                    <DescriptionIcon />
                                </div>
                            </div>
                            <div className="card-title-wrapper">
                                <span>{cloudinaryFunctions.cleanFilename(props.resource.filename)}</span>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
            }
        </>
    )
}

export default ResourceCard