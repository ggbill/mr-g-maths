import React, { useState } from 'react'
import { Card, CardContent, CardActionArea } from '@material-ui/core'
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react'
import { Link } from "react-router-dom"
import FolderOpenIcon from '@material-ui/icons/FolderOpen'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import './folderCard.scss';

interface InputProps {
    folder: any,
    url: string,
    index: number
}


const FolderCard = (props: InputProps) => {

    return (
        <>
            {props.url === "/" ?
                <Card style={{ animationDelay: `${props.index * 0.1}s` }} className="folder-card">
                    <CardActionArea component={Link} to={`${props.url}${props.folder.name}`}>
                        <CardContent>
                            <span className="folder-label">{props.folder.name.replace(/_/g, " ")}</span>
                        </CardContent>
                    </CardActionArea>
                </Card> :
                <Card style={{ animationDelay: `${props.index * 0.1}s` }} className="folder-card">
                    <CardActionArea component={Link} to={`${props.url}/${props.folder.name}`}>
                        <CardContent>
                            <span className="folder-label">{props.folder.name.replace(/_/g, " ")}</span>
                        </CardContent>
                    </CardActionArea>
                </Card>
            }
        </>
    )
}

export default FolderCard