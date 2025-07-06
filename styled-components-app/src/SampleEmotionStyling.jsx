import React from 'react';
import { css, Global, ClassNames } from '@emotion/react'

function SampleEmotionStyling(props) {
    return (
        <div css={{ color: 'hotpink' }}>
            <div css={css`
                color: green;
            `}/>
            <Global styles={{
                body: {
                    margin: 0,
                    padding: 0
                }
            }}/>
            <ClassNames>
            {({ css, cx }) => (
                <div className={cx(
                    'some-class',
                    css`
                    color: yellow;
                    `
                )}/>
            )}
            </ClassNames>
        </div>
    );
}

export default SampleEmotionStyling;

