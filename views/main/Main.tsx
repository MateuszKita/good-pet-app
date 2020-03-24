import React, {Component} from "react";
import {Text, View} from "react-native";
import {genericStyle} from "../../styles/generic.style";
import GpButton from "../../shared/components/button/button.component";
import {BUTTON_TYPE} from "../../shared/components/button/button.constants";
import {auth, database} from "firebase";
import {User} from "../../shared/models/users.model";

export default class Main extends Component<any> {

    constructor(props) {
        super(props)
    }

    public state: { currentUser?: User, otherUsers: string } = {
        currentUser: undefined,
        otherUsers: ""
    };

    componentDidMount = async () => {
        database().ref("users").on('value', (snapshot) => {
            if (snapshot.val()) {
                const currentUser: User = auth().currentUser;
                const otherUsers: User[] = Object.values(snapshot.val()).filter((user: User) => user.uid !== currentUser.uid) as User[];
                this.setState({
                    currentUser,
                    otherUsers: otherUsers.map(user => user.displayName || user.email).join(", ")
                })
            }
        });
    };

    render() {
        return (
            <View style={genericStyle.container}>
                <Text>Witaj użytkowniku {this.state.currentUser?.displayName || this.state.currentUser?.email}</Text>

                <Text>Pozostali użytkownicy to {this.state.otherUsers || "[brak wyników :/]"}</Text>

                <GpButton type={BUTTON_TYPE.PRIMARY}
                          content={"Wyloguj się"}
                          onPress={() => this.props.navigation.navigate('Start')}/>
            </View>
        );
    }

}
