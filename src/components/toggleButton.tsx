import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Flex, IconButton, useColorMode } from '@chakra-ui/react';

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Flex align="center" justify="center">
      <IconButton
        size="md"
        fontSize="lg"
        variant="ghost"
        color="current"
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        marginLeft="2"
        onClick={toggleColorMode}
        icon={isDark ? <SunIcon />: <MoonIcon/>}
      />
    </Flex>
  );
};

export default ToggleColorMode;