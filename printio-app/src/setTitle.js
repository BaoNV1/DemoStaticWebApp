import { OFConstants } from "commons/Constants";

export default function setTitle() {
    const noteEnv = process.env.NODE_ENV;
    const reactAppEnv = process.env.REACT_APP_ENV;
    switch (noteEnv) {
        case 'development':
            const type = process.env.TYPE;
            if (type === 'user') {
                document.title = OFConstants.TITLE_USER;
            } else {
                document.title = OFConstants.TITLE_ADMIN;
            }
            break;
        case 'production':
            if (reactAppEnv === 'user') {
                document.title = OFConstants.TITLE_USER;
            } else {
                document.title = OFConstants.TITLE_ADMIN;
            }
            break;
        default:
            document.title = 'Printio';
            break;
    }
}