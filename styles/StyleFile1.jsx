import {StyleSheet} from 'react-native';
export const css = StyleSheet.create({

    //  INICIO DO HEADER
    imglogo1:{
        width: 100,
        height: 100
    },
    imglogo2:{
        width: 150,
        height: 70,
        marginBottom: 20
    },
    divheader:{
        paddingHorizontal: 50,
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
        // justifyContent: "space-between"
    },

    //  INICIO DA MAIN
    divmain: {
        marginTop: 100,
        alignItems: "center"
    },
    txtnome:{
        fontSize: 22,
        marginBottom: 10,
    },
    nomeagencia:{
        flexDirection: "row",
        gap:30,
        justifyContent:"space-evenly",
    },
    txtBtn:{
        fontSize: 18,
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
    imgfooter:{
        width: 70,
        height: 70,
        alignItems: "center",
        marginBottom: 15,
    },
    divfooter:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 60,
    },
    btnatalho1:{
        alignItems: "center",
        padding: 10,
        borderWidth: 3,
        borderColor: "#29b063",
        borderRadius:10,
        backgroundColor: "#2ecc71",
    },
    btnatalho2:{
        alignItems: "center",
        padding: 10,
        borderWidth: 3,
        borderColor: "#d74638",
        borderRadius:10,
        backgroundColor: "#e74c3c",
    },
    //  O pai de todos e todas
    paidetodos:{
        height: "100%",
        alignItems: "center",
        justifyContent: "space-around",
    },
})