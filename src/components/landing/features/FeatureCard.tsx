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
    <div className="border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-card w-full h-full flex flex-col">
      {/* Content Section */}
      <div className="p-6 space-y-4 flex-grow">
        {/* Label with Icon */}
        <div className="inline-flex items-center gap-2 px-3 py-2 border border-border rounded-lg bg-background w-fit">
          <Icon className="w-4 h-4 text-foreground" />
          <span className="text-sm text-foreground font-medium">
            {label}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-foreground leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-body leading-relaxed">
          {description}
        </p>
      </div>

      {/* Image Section */}
      <div className="relative h-64 bg-muted/30 overflow-hidden flex-shrink-0">
        <img 
          className="w-full h-full object-cover" 
          src={image} 
          alt={altdesc} 
        />
      </div>
    </div>
  );
}

export default FeatureCard;