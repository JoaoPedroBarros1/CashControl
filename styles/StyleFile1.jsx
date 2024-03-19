import {StyleSheet} from 'react-native';
export const css = StyleSheet.create({

    //  INICIO DO HEADER
    divheader:{
        flexDirection: "row",
        //justifyContent: "space-around",
        alignItems: "center",
    },
    imglogo:{
        resizeMode: "contain",
        width: 100,
    },

    //  INICIO DA MAIN
    divmain: {
        marginTop: 180,
        alignItems: "center"
    },
    nomeagencia:{
        flexDirection: "row",
        justifyContent:"space-evenly"
    },
    txtBtn:{
        color: "#F0F8FF"
    },
    btnmain:{
        width:200,
        height: 60,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#3CB371",
    },
    btndiv:{
        alignItems: "center",
        marginTop:40,
    },
    txt:{
        fontSize:16,
    },

//  INICIO DO FOOTER
    divfooter:{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    btnatalho:{
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        borderRadius:10,
    },
    //  O pai de todos e todas
    paidetodos:{
        flex: 1,
        // alignItems: "center",
        // justifyContent: "space-between"
    },
})