import Container from "@/app/components/Container";
import UpdateProductForm from "./UpdateProductForm";
import getCurrentUser from "@/actions/getCurrentUser";
import FormWrap from "@/app/components/FormWrap";
import NullData from "@/app/components/NullData";

const UpdateProduct = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Oops! Access denied." />;
  }

  return (
    <div className="p-8">
      <Container>
        <FormWrap>
          <UpdateProductForm />
        </FormWrap>
      </Container>
    </div>
  );
};

export default UpdateProduct;
