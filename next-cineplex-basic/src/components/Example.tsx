import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";

const Example = ({ data }: { data: any[] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {data?.map((item, index) => (
        <Card key={index} shadow="sm" radius="md" withBorder>
          <Card.Section>
            <Image src={item.src} height={160} alt="Norway" />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>{item.name}</Text>
            <Badge color="pink" variant="light">
              On Sale
            </Badge>
          </Group>

          <Text size="sm" color="dimmed">
            {item.content}
          </Text>

          <Button variant="light" color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default Example;
