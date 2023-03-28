import Example from "@/components/Example";
import ExampleLayout from "@/components/ExampleLayout";
import exampleService from "@/services/example.service";

import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { data, isLoading } = useQuery(["data-hello"], exampleService.hello);

  return (
    <ExampleLayout>
      <div>
        {isLoading && <>Loading...</>}
        {!isLoading && <Example data={data?.rows} />}
      </div>
    </ExampleLayout>
  );
};

export default Home;
