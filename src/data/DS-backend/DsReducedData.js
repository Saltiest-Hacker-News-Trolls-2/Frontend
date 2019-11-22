import React, { useState } from 'react'
import axios from 'axios'

const initialState = {
    commenters: []
}

const DsReducedData = (corsURL, dsURL) => {
    const [state, setState] = useState(initialState);
    axios
        .get(corsURL + dsURL)
        .then(res => {
            let temp = [{}]
            let a = 0;
            for(let i = 0; a < 100; i++){
                if(temp[a]){
                    if(res.data[i].hacker !== temp[i].hacker){
                        temp[a] = res.data[i]
                        a++;
                    } else {
                        temp[a].comment = temp[a].comment.concat(',', res.data[i].comment);
                    }
                } else {
                    temp[a] = res.data[i];
                    a++;
                }
            }
            setState({ comments: temp })
        })
        .catch(er => console.log(er))
    localStorage.setItem('SaltyCommenters', state);
}

export default DsReducedData;