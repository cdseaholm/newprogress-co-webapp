'use client'

import { motion } from 'framer-motion';

const MotionWrap = ({children, motionKey}: {children: React.ReactNode; motionKey: string}) => {

    return (
        <motion.div
        key={motionKey}
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -300, opacity: 0 }}
        transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.2,
        }} className='w-screen h-full overflow-hidden'>
            {children}
        </motion.div>
    );
};

export default MotionWrap;