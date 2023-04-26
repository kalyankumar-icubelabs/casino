import { useContext } from 'react';
import { IconFingerprint } from '@tabler/icons-react';
import { useMantineTheme } from '@mantine/core';
import { ThemeContext } from '@/Context/ThemeContext';

export default function ThemeButton(){
    const{isDark,setThemeMode}=useContext(ThemeContext)
    const theme=useMantineTheme()
    console.log("isDark",isDark)
    return(
        <button onClick={setThemeMode}>
            <IconFingerprint/>
        </button>
    )
}