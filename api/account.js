import { get, post, put } from "../controllers/accountController"; 

function account(req, res) {
    switch (req.method) {
        case 'GET':
            get(req, res)
            break;
        case 'POST':
            post(req, res)
            break;

        case 'PUT':
            put(req, res)
            break;

        default:
            res.status(400).json({})
            break;
    }
}