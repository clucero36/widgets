const colors = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green',
    },
    {
        label: 'A shade of blue',
        value: 'blue'
    }
];

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite js library amongst engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
];

const langs = [
    {
        label: 'Afrikaans',
        value: 'af',
    },
    {
        label: 'Arabic',
        value: 'ar',
    },
    {
        label: 'Hindi',
        value: 'hi',
    }
];

export const getLangs = () => {
    return langs;
}

export const getColors = () => {
    return colors;
}

export const getItems = () => {
    return items;
}