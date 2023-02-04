import Box from '@components/Box'
import ItemList from '@components/ItemList'
import Text from '@components/Text'
import COLOR from '@constants/COLOR'

import { StyleSheet, View } from 'react-native'


const Navbar = () => {
    return <Box
        height={50}
        width={"100%"}
        backgroundColor={COLOR.black}
    >
        <ItemList layout="row" >
            <Text color={COLOR.white}>abc</Text>
            <Text color={COLOR.white}>xyz</Text>
        </ItemList>
    </Box>
}

export default Navbar