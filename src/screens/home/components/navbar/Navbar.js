import Button from '@components/Button'
import Box from '@components/Button'
import { IconButton, rocketIcon } from '@components/Icon'

import ItemList from '@components/ItemList'
import Text from '@components/Text'
import View from '@components/View'
import COLOR from '@constants/COLOR'




const Navbar = () => {
    return <View layout="row" >
        <IconButton icon="twitter" backgroundColor={COLOR.yellow} colorIcon={COLOR.lightBlue} colorText={COLOR.black} onPress={() => console.log("press!")} >Login</IconButton>
    </View>

}

export default Navbar