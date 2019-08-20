import {
    createAction,
    handleAction
} from 'redux-actions'

const default_states = {
    posts: []
};

export const action = createAction('getPosts');
export const reducer = handleAction(
    action,
    (state, action) => {
        return {
            posts: action.payload.children.map((child, index) => {
                return {
                    key: index,
                    text: child.data.title
                }
            })
        }
    },
    default_states.posts
)
export const mapStateToProps = state => ({
    posts: state.posts
});
export const mapDispatchToProps = dispatch => ({
    getPosts: async () => {
        try 
        {
            let response = await fetch('https://www.reddit.com/r/NintendoSwitch.json');
            let data = await response.json();
            dispatch(action(data.data));
        }
        catch(err)
        {
            console.log(err);
        }
    }
})