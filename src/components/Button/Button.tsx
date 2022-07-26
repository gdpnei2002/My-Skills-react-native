import React from "react";
import {TouchableOpacity, TouchableOpacityProps, Text, StyleSheet} from "react-native"
import styles from "./style"

interface ButtonProps extends TouchableOpacityProps{
    title: string
}

export function Button({title, ...rest} : ButtonProps){
    return(
        <TouchableOpacity  
                style={styles.button}
                activeOpacity={.7}
                {...rest}
                >
                <Text  style={styles.buttonText}>
                    { title }
                </Text>
        </TouchableOpacity>
    )
}