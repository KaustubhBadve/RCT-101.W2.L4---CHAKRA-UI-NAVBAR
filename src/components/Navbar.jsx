import React from 'react'
import {HStack,Box,Button, color,BreadcrumbItem,BreadcrumbLink,Breadcrumb, Link, Popover, 
    PopoverContent, PopoverHeader,PopoverTrigger, PopoverCloseButton, PopoverBody,
     PopoverArrow,Stack, Badge, Menu, MenuButton, MenuList, MenuItem,} from "@chakra-ui/react"


const Navbar = () => {
  return (
    <div>
        <HStack spacing='24px' border="1px solid grey" height="20" display="flex" justifyContent="space-between" alignItems="center">
  
        <HStack display="flex" justifyContent="space-evenly" width="600px">
  <Box w='60px' h='40px' 
  fontWeight={600} 
  textTransform="bold" 
  fontFamily="chakra-fonts-heading" 
  textAlign='left'
  fontSize="26px"
  marginLeft={30}
  >
    Logo
  </Box>


  {/* <Menu>
  <MenuButton as={Button}>
  New &  Noteworthy
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu> */}


  <Popover placement='bottom-start'>
  <PopoverTrigger>
    <Link fontWeight="600" color="#4a5568">Inspiration</Link>
  </PopoverTrigger>
  <PopoverContent>
    
    <PopoverArrow />
    {/* <PopoverCloseButton/> */}
    <PopoverBody>
    <Box fontWeight='semibold' direction='column'>
  <Badge fontSize="17px" color="grey">Explore Design Work</Badge>
  <p color='grey'>Trending Design to inspire you</p>
  </Box>









  <Stack marginTop="19px" fontWeight='semibold'  direction='column'>
  <Badge fontSize="17px" color="grey">New &  Noteworthy</Badge>
  <p color='grey'>Up-and-Coming-Designers</p>
  </Stack>
    </PopoverBody>
  </PopoverContent>
</Popover>

<Popover placement='bottom-start'>
  <PopoverTrigger>
    <Link fontWeight="600" color="#4a5568">Find Work</Link>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader fontWeight='semibold'>Popover placement</PopoverHeader>
    <PopoverArrow />
    <PopoverCloseButton/>
    <PopoverBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore.
    </PopoverBody>
  </PopoverContent>
</Popover>







  <Link fontWeight="600" color="#4a5568">Learn Design</Link>
  <Link fontWeight="600" color="#4a5568">Hire Designers</Link>
  </HStack>


  <HStack w='220px' h='40px'>
  
  <Link width="90px" fontSize="18px" marginRight="20px" fontWeight="300" color="#4a5568">Sign In</Link>
  
  
  <Button colorScheme='pink'
   variant="solid" 
   backgroundColor="chakra-colors-pink-400"
   _hover={{color:"#FED7E2"}}
    fontWeight="600"
   >Button</Button>

  </HStack>


 

</HStack>
    </div>
  )
}

export default Navbar