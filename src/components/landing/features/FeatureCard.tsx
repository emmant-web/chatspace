import { type LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  image: string;
  altdesc: string;
}

function FeatureCard({
  icon: Icon,
  label,
  title,
  description,
  image,
  altdesc,
}: FeatureCardProps) {
  return (
    <div className="border border-border shadow-sm rounded-lg m-2 overflow-hidden hover:shadow-md w-xs md:w-sm lg:w-lg lg:h-auto mx-auto">
      {/* content div */}
      <div className="p-4 h-64 bg-muted">

        <div className="flex justify-start items-center gap-3 p-2 border border-border rounded-sm mb-3 w-50 bg-background">
          <Icon className="w-5 h-5 text-foreground" />
          <span className="text-sm text-foreground dark:text-gray-400 font-medium">
            {label}
          </span>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground dark:text-foreground mb-3">
            {title}
          </h3>
          <p className="">{description}</p>
        </div>

      </div>

      {/* image div */}
      <div className="h-48">
        <img className="w-full h-full object-cover" src={image} alt={altdesc} />
      </div>
    </div>
  );
}

export default FeatureCard;
