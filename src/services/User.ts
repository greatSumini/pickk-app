import {Platform} from 'react-native';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
export const authFacebook = async (): Promise<string> => {
  let result;
  if (Platform.OS === 'android') {
    LoginManager.setLoginBehavior('web_only');
  }

  result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  if (!result.isCanceled) {
    AccessToken.getCurrentAccessToken().then(({accessToken}) => {
      fetch('https://graph.facebook.com/v2.5/me?access_token=' + accessToken)
        .then(response => response.json())
        .then(({id}) => {
          return id;
          // Some user object has been set up somewhere, build that user here

          /*user.name = json.name;
          user.id = json.id;
          user.user_friends = json.friends;
          user.email = json.email;
          user.username = json.name;
          user.loading = false;
          user.loggedIn = true;
          user.avatar = setAvatar(json.id);*/
        })
        .catch(() => {
          return 'error';
        });
    });
  }
  return 'canceled';
};
