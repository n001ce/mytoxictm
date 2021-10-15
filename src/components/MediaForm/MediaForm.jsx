import React, {useState} from 'react'
import {Button, CssBaseline, Box, TextField, Input} from'@material-ui/core'
import{makeStyles, createStyles, createTheme} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from'@material-ui/core/Typography'
import { Menu,  MenuItem, } from '@mui/material';
import Fade from '@mui/material/Fade'


const theme = createTheme({
    spacing: 4,
})

const useStyles = makeStyles({
    root:{
        background: "FAF3EC",
        marginTop:"50px"
    },
    formImage:{
        boxShadow: '0 0 10px',
        backgroundColor: 'paper',
        maxWidth: '500px',
        minHeight: '500px',
        display: 'flex',
        flexWrap: 'wrap',
        margin:'0 auto'
    },
    textField:{
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch'
    },
    divForm:{
        width: '90%',
    },
    image:{
        width: '90%',
        height:'35%',
        margin:'8px'
    },
    paperRoot:{
        maxWidth: 345,
    }
})

export default function MediaForm() {
    const classes = useStyles()
    const [file, setFile] = useState('')
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    function handleChange(e){
        let url = URL.createObjectURL(e.target.files[0])
        setFile(url)
        console.log(url)
    }
    return (
        <Box component="main"  className={classes.root} width="auto" height="500px">
        <Box className={classes.formImage}>


            <div className={classes.divForm}>

                <h1 style={{ margin: 8 }}>
                    Upload an Image
                </h1>

                <TextField
                    id="outlined-full-width"
                    label="Text"
                    style={{ margin: 8 }}
                    placeholder="Enter email"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <div>
                    <Button
                        id="fade-button"
                        aria-controls="fade-menu"
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        Platform
                    </Button>
                    <Menu
                        id="fade-menu"
                        MenuListProps={{
                        'aria-labelledby': 'fade-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem onClick={handleClose}>Xbox</MenuItem>
                        <MenuItem onClick={handleClose}>PlayStation</MenuItem>
                        <MenuItem onClick={handleClose}>Switch</MenuItem>
                        <MenuItem onClick={handleClose}>PC</MenuItem>
                    </Menu>
                </div>

                <TextField
                    id="outlined-full-width"
                    label="Image Upload"
                    style={{ margin: 8 }}
                    name="upload-photo"
                    type="file"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    onChange={ handleChange}
                />
                {
                    file.length > 0 &&

                    <Card className={classes.paperRoot}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={file}
                                title="Contemplative Reptile"
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            </Typography>
                        </CardContent>
                    </Card>
                }
            </div>
        </Box>
    </Box>
    )
}
