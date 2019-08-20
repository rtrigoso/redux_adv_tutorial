import {
    createAction,
    handleAction
} from 'redux-actions'

const default_states = {
    fetch_status: false,
    posts: []
};

export const fetch_status = createAction('fetch_status');
export const fetch_status_reducer = handleAction(
    fetch_status,
    (state, action) => ({
        ...state,
        fetch_status: state.fetch_status,
    }),
    default_states.fetch_status
);

export const get_posts = createAction('get_posts');
export const get_posts_reducer = handleAction(
    get_posts,
    (state, action) => ({
        ...state,
        posts: state.posts
    }),
    default_states.posts
)