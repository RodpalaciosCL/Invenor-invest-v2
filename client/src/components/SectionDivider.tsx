import { motion } from "framer-motion";

interface SectionDividerProps {
  title?: string;
  color?: string;
}

export default function SectionDivider({ title, color = "bg-orange-600" }: SectionDividerProps) {
  return (
    <motion.div
      className="relative py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-zinc-700"></div>
      </div>
      <div className="relative flex justify-center">
        <div className={`${color} h-1 w-32 rounded-full`}></div>
      </div>
      {title && (
        <div className="relative flex justify-center mt-4">
          <span className="bg-zinc-900 px-6 py-2 text-zinc-400 text-sm font-medium rounded-full border border-zinc-700">
            {title}
          </span>
        </div>
      )}
    </motion.div>
  );
}