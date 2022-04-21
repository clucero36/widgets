import React, { useState, useEffect } from 'react';
import googleTranslate from '../apis/googleTranslate';

const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);

        return () => {
            clearTimeout(timerId);
        }
    }, [text]);

    useEffect(() => {
        const doTranslation = async () => {
            const response = await googleTranslate.post('', {}, {
                params: {
                    q: debouncedText,
                    target: language,
                },
            });

            setTranslated(response.data.data.translations[0].translatedText);
        };

        doTranslation();

    }, [language, debouncedText]);

    return (
        <div>
            <h1 className='ui header'>{translated}</h1>
        </div>
    )
}


export default Convert;