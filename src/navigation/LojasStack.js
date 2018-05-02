import React from "react";
import {StackNavigator} from 'react-navigation';
import LojaListaScreen from "../screens/LojaListaScreen";
import LojaScreen from "../screens/LojaScreen";
import FormularioLojaScreen from "../screens/FormularioLojaScreen";

export default StackNavigator({

        Home: {
            screen: LojaListaScreen,
        },

        DetalhesLoja: {
            screen: LojaScreen,
        },

        AdicionarLoja:{
            screen: FormularioLojaScreen,
            navigationOptions: {title: "Adicionar Loja"}
        },

        EditarLoja: {
            screen: FormularioLojaScreen,
            navigationOptions: {title: "Editar Loja"}
        },

    },

    {
        initialRouteName: 'Home',
    },
);