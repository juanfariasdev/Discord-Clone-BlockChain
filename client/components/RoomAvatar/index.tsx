import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';
import styles from './RoomAvatar.module.scss';

interface IRoomAvatar{
    id: number;
    avatar: StaticImageData;
    name: string;
}

function RoomAvatar ({id, avatar, name}: IRoomAvatar) {
    const router = useRouter();

    // MELHORAR //
    const changeUrl = () => {
        router.push(`?channel=${id}&name=${name}`)
    };
    return (
        <div className={styles.wrapper} onClick={changeUrl}>
            <div className={styles.roomAvatar}>
                <Image
                    src={avatar}
                    className={styles.roomAvatarImage}
                    height={48}
                    width={48}
                    alt={name}
                    />
            </div>
        </div>
    )
}

export { RoomAvatar}