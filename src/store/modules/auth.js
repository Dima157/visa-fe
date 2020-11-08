import AuthService from '../../services/api.service';

export default {
    state: {
        user: {},
        //Todo: get JWT token
    },
    mutations: {
        setAuthData(state, authData) {
            this.state.user = authData.user
        }
    },
    actions: {
        async signIn(context, user) {
            try {
                const authData = await AuthService.post('sign-in', {user: user});
                context.commit('setAuthData', authData)
            } catch (error) {
                //
            }

        }
    },
    getters: {

    }
}
