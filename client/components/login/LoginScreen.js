import { View, TextInput, Text } from 'react-native';
import React, {useState} from "react";


const LoginScreen = ({onLoginSubmit}) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleNameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const user = {
            username: username,
            password: password
        }
        onLoginSubmit(user)
        setUsername("")
        setPassword("")
    }

    return(
            <>
            <View>
            <Text>Log in</Text>
            <TextInput >
            
            {/* onSubmit={handleSubmit}
                    <input className="user-form-inputs" type="text" id="name" placeholder="ENTER USERNAME.." value={username} onChange={handleNameChange} required/>
                    <input className="user-form-inputs" type="password" id="password" placeholder="PASSWORD.." value={password} onChange={handlePasswordChange} required/>
                    <input type="submit" value="Log in" /> */}
            </TextInput>    
            </View>
            </>
    )
}


export default LoginScreen;