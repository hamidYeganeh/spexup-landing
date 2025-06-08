import { IReview } from "@/types/reviews.types";
import { FC } from "react";
import { Box } from "../../Box";
import { Text } from "@/components/ui/Text";
import { Rate } from "@/components/ui/Rate";

interface IReviewCardProps {
  data: IReview;
}
export const ReviewCard: FC<IReviewCardProps> = (props) => {
  const { data } = props;
  return (
    <div className="w-full">
      <Box className="w-full" highlightClassName="p-4">
        <div className="flex flex-col gap-4">
          <Rate slots={5} value={data?.rate} />
          <Text
            size={"sm"}
            weight={"bold"}
            className="text-justify text-primary-lighter"
          >
            {data?.description}
          </Text>
          <Text size={"sm"} weight={"bold"} className="text-primary-lighter">
            {data?.name}
          </Text>
          <Text
            size={"sm"}
            weight={"bold"}
            className="text-primary-lighter"
          >{`${data?.position}, ${data?.company}`}</Text>
        </div>
      </Box>
    </div>
  );
};
