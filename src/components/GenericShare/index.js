import React from 'react'
import { Platform, View, StyleSheet, Share } from 'react-native'
import { Button } from '@protonapp/react-native-material-ui';

const GenericShare = (props) => {
	const { 
		styles, 
		title = "", 
		backgroundColor,
		icon,
		message = "", 
		sharedAction, 
		dismissedAction, 
		errorAction,
		_height = 36,
 		_width = 160 } = props
		console.log(props)
	const onShare = async () => {
    try {
      const result = await Share.share({
        message,
      });
			if (Platform.OS === 'android' || Platform.OS === 'ios') {
				if (result.action === Share.sharedAction) {
					if (sharedAction) {
						sharedAction()
					}
				} else if (result.action === Share.dismissedAction) {
					if (dismissedAction) {
						dismissedAction()
					}
				}
			}
    } catch (error) {
      if (errorAction) {
				errorAction()
			}
    }
  };
	return(
		<View>
		<Button  
		icon={icon}
		text={title} 
		style={{
			container: {
				backgroundColor: backgroundColor,
				height: _height,
				width: _width
			},
			text: {
				color: styles && styles.titleStyles ? styles.titleStyles.color : undefined,
				fontFamily: styles && styles.titleStyles ? titleStyles.fontFamily : undefined,
				fontSize: styles && styles.titleStyles ? styles.titleStyles.fontSize : undefined,
				fontWeight: styles && styles.titleStyles ? styles.titleStyles.fontWeight : undefined
			}
		}} 
		onPress={onShare}></Button>
		</View>
	)
}

export default GenericShare
