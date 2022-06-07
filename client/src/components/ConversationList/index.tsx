import Image from 'next/image';
import React from 'react'

import friends from '../../assets/icons/friends.svg';
import Nitro from '../../assets/icons/nitro.svg';
import styles from './Conversation.module.scss';

function ConversationList() {
  return (
    <div className={styles.conversations}>
        <div className={styles.conversationListTop}>
            <input type="search" placeholder="Find or start a conversation" />
        </div>

        <div className={styles.conversationsContainer}>
            <div className={styles.elementsContainer}>
                <div className={styles.svgContainer}>
                    <Image
                        height={25}
                        width={25}
                        src={friends}
                        className={styles.svg}
                        alt='friends' />
                </div>
                <p>Friends</p>
            </div>
            <div className={styles.elementsContainer}>
                <div className={styles.svgContainer}>
                    <Image
                        height={25}
                        width={25}
                        src={Nitro}
                        className={styles.svg}
                        alt='Nitro' />

                </div>
                <p>Nitro</p>
            </div>
            <div className={styles.dmTitle}>
                direct messages
            </div>
        </div>
    </div>
  )
}

export { ConversationList }