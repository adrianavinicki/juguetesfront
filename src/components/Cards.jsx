import { Box, Flex, Card, CardHeader, CardFooter, CardBody, Stack, Button, Heading, Divider, ButtonGroup, Text, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"


const Cards = (props) => {
    return(
        <div>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src={props.image}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>{props.name}</Heading>
                    <Text>
                        {props.description}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        {"$" + props.price}
                    </Text>
                    </Stack>
                </CardBody>
            <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Add to Cart
                    </Button>
                    <Link key={props.id} to={`/detail/${props.id}`}>
                    <Button variant='ghost' colorScheme='blue'>
                        Detail
                    </Button>
                    </Link>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Cards