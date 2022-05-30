import { toast } from 'react-toastify';

export const deleteMessage = (msgid,db) => {
    db.collection('Messages').doc(msgid).delete()
    .then(() => {
        toast.warn("Message Deleted!", {
            theme: "dark",
            autoClose: 1000
        })
    }).catch(() => {
        toast.error("Something went wrong!")
    })


}