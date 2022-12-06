import React from 'react'
import {Text, Progress} from '@chakra-ui/react';

export default function Status({ isLoading, status}) {
    return (
        <div>
            <Text>
               {isLoading
               ? `Calculating... ${status || 'uploading'}...`
               : 'Give me audio!'}
                </Text>
                <Progress
                size = "sm"
                width = {500}
                isIndeterminate = {isLoading}
                colorScheme = "green"
                />
                </div>
    );
}