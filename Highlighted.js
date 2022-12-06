import { Box, Text, Tooltip} from '@chakra-ui/react';

const sentimentColor = {
    POSITIVE: 'lightblue',
    NEGATIVE: 'lightred',
    NEUTRAL: 'lightorange',
};

export default function Highlighted( {text, sentiment}) {
    return <Box as="mark" bg={sentimentColor[sentiment]} mr="1">{text}</Box>;
    
}