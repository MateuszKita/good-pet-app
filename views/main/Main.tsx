import React, {Component} from "react";
import {Text, View} from "react-native";
import {genericStyle} from "../../styles/generic.style";
import GpButton from "../../shared/components/button/button.component";
import {BUTTON_TYPE} from "../../shared/components/button/button.constants";
import {auth, database, User} from "firebase";
import {ISimpleUser} from "../../shared/models/users.model";
import {Toast} from "native-base";

export default class Main extends Component<any> {

    constructor(props) {
        super(props)
    }

    // private interval;

    public state: { currentUser: User, otherUsers: string, isVerified: boolean } = {
        currentUser: undefined,
        otherUsers: "",
        isVerified: undefined
    };

    componentDidMount = async () => {
        database().ref("users").on('value', (snapshot) => {
            if (snapshot.val()) {
                const currentUser: User = auth().currentUser;
                if (!currentUser) {
                    this.props.navigation.navigate("Start");
                }
                const otherUsers: ISimpleUser[] = Object.values(snapshot.val()).filter((user: ISimpleUser) => user.uid !== currentUser.uid) as ISimpleUser[];
                this.setState({
                    currentUser,
                    otherUsers: otherUsers.map(user => user.displayName || user.email).join(", "),
                    isVerified: currentUser.emailVerified
                });
                // this.watchIsVerifiedChanges();
            }
        });
    };

    componentWillUnmount(): void {
        // clearInterval(this.interval);
    }

    private watchIsVerifiedChanges(): void {
        setInterval(() => {
            auth().currentUser.reload().then(() => {
                console.log("TUTAJ JEST NASZ SUPER LOG CZY JEST UŻYTKOWNIK ZWERYFKOWANY", auth().currentUser.emailVerified)
            });
            // this.interval = this.setState({...this.state, isVerified: auth().currentUser.emailVerified});
        }, 3000);
    }

    private logout(): void {
        auth().signOut().then(() => {
            this.props.navigation.navigate("Start");
        })
    }

    private sendVerificationEmail(): void {
        this.state.currentUser.sendEmailVerification().then(() => {
            Toast.show({
                text: "E-mail weryfikacyjny został ponownie wysłany",
                duration: 3000,
                position: "top",
                style: {
                    backgroundColor: "blue"
                },
                textStyle: {
                    textAlign: "center"
                }
            });
            this.logout();
        })
    }

    render() {
        return (
            this.state.isVerified
                ? <View style={genericStyle.container}>
                    <Text>Witaj użytkowniku {this.state.currentUser?.displayName || this.state.currentUser?.email}</Text>

                    <Text>Pozostali użytkownicy to {this.state.otherUsers || "[brak wyników :/]"}</Text>

                    <GpButton type={BUTTON_TYPE.PRIMARY}
                              content={"Wyloguj się"}
                              onPress={() => this.logout()}/>
                </View>
                : <View style={genericStyle.container}>

                    <View style={{
                        paddingBottom: 80,
                        marginLeft: 50,
                        marginRight: 50
                    }}>
                        <Text>Aby aplikacja była dostępna do użytkowania, należy najpierw zweryfkować
                            swój adres e-mail poprzez kliknięcie na link w otrzymanej wiadomości e-mail.
                            Jeżeli wiadomość nie dotarła, użyj opcji "Wyślij ponownie"</Text>
                    </View>

                    <GpButton type={BUTTON_TYPE.SECONDARY}
                              content={"Wyloguj się"}
                              onPress={() => this.logout()}/>
                    <GpButton type={BUTTON_TYPE.PRIMARY}
                              content={"Wyślij ponownie"}
                              onPress={() => this.sendVerificationEmail()}/>
                </View>
        );
    }

}
